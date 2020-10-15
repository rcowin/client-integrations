import { Client } from "./Client";

export class CSClient extends Client {
    constructor(
      public readonly maxWaitTime = 5000
    ) {
        super(maxWaitTime);
    }

    sendMetrics(type: string, event: any) {
        var uid = this.getUid(event);
        let cidEid = this.getCidEid(event);

        this.pushCSEvent(uid, cidEid);
    }

    pushCSEvent(userId: string, cidEid: string) {
        // CS integration should resplit the eid and cid
        var cidEidArray = cidEid.split(':', 2);
        var cid = cidEidArray[0];
        var eid = cidEidArray[1];

        try {
          window._uxa = window._uxa || [];
          window._uxa.push(["trackDynamicVariable",{key: "Evolv_" + eid, value: cid}]);
        } catch (error) {
          console.error('Error:', error);
        }
    };
}