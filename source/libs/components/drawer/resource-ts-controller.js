import _ from "lodash";
import { api } from "../../utils";

class ResourceTSController {
  constructor() {
    this.isAborted = false;
  }

  loadTimestamps(sources, callback) {
    _.every(sources, async (source, index) => {
      const [ts, err] = await api(_.replace(source, /(\d+)im_?/, "$1"), {
        method: "HEAD",
        fetchResHeader: "Memento-Datetime"
      });
      if (!this.isAborted) {
        callback(ts, err, index);
      }
      return !this.isAborted;
    });
  }

  reset() {
    this.isAborted = false;
  }

  abort() {
    this.isAborted = true;
  }
}

const resourceTSController = new ResourceTSController();

export default resourceTSController;