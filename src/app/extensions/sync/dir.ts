var os = require('os');
var fs = require('fs');
import electron = require('electron');
let { ipcRenderer } = electron;
export class Mkdir {
    private dir: string;
    
    constructor() {
       

    }

    public create(dir: string): boolean {
        
        let newDir = os.homedir() + '/' + this.dir;
        fs.exists(newDir, function (params, status) {
            if (status !== true) {
                fs.mkdir(newDir, function (_, t) { });
                fs.chmod(newDir, '777', function (_, t) {

                });

            } else {
                fs.chmod(newDir, '777', function (_, t) {

                });
            }

        });
        
        return true;
    }
}
