export default function bloater() {
    console.log('initiating to bloat');

    function createObjects(count=1000) {
        console.log('creating ', count, 'objects');
        const arrayColl = [];
        let newObj = undefined;
        let currentTime = Date.now();
        
        for (let i = 0; i <count; i++) {
            newObj = {
                dt: currentTime + i,
                high: 12.92,
                low: 12.86,
                open: 12.9,
                close: 12.92,
                volume: 10645,
                turnover: 136987.29,
                change: -0.08,
                pctChange: -0.62,
                cit: 26261.939453,
                cot: 110725.351563,
                cic: 7,
                coc: 4,
                cov: 8610,
                civ: 2035,
                netTurnover: -84463.41211,
                netVolume: -6575,
                netTrade: 3,
                vwap: 12.89,
                dividend: 0,
                ltp: 12.92,
                pcls: null,
                bbp: null,
                bap: null,
                out: 12.87,
            };
            
            
            arrayColl.push(newObj);
        }

        return arrayColl;
    }

    function startBloating(dataColl) {
        console.log('starting to bloat the objects');
        let currObj;

        for (let i = 0; i < dataColl.length; i++) {
            currObj = dataColl[i];
            currObj.dateTimeDoule = currObj.dt * 2;
            currObj.highDoule = currObj.dt * 2;
            currObj.lowDoule = currObj.dt * 2;
            currObj.aDoube = currObj.dt * 2;
            currObj.bDoble = currObj.dt * 2;
            currObj.cDoule = currObj.dt * 2;
            currObj.dDoule = currObj.dt * 2;
            currObj.eDoule = currObj.dt * 2;
            currObj.fDoule = currObj.dt * 2;
            currObj.gDoule = currObj.dt * 2;
        }
    }

    function startExtending(dataColl) {
        console.log('starting to extend the objects');
        let currObj;

        for (let i = 0; i < dataColl.length; i++) {
            currObj = dataColl[i];
            currObj = {
                ...currObj,
                dateTimeDoule: currObj.dt * 2,
                highDoule: currObj.dt * 2,
                lowDoule: currObj.dt * 2,
                aDoube: currObj.dt * 2,
                bDoble: currObj.dt * 2,
                cDoule: currObj.dt * 2,
                dDoule: currObj.dt * 2,
                eDoule: currObj.dt * 2,
                fDoule: currObj.dt * 2,
                gDoule: currObj.dt * 2
            };
        }

        console.log('completed to extend the objects');

    }


    function startAssigning(dataColl) {
        console.log('starting to assign to new object');
        let currObj;

        for (let i = 0; i < dataColl.length; i++) {
            currObj = dataColl[i];
            currObj = Object.assign(currObj, {
                dateTimeDoule: currObj.dt * 2,
                highDoule: currObj.dt * 2,
                lowDoule: currObj.dt * 2,
                aDoube: currObj.dt * 2,
                bDoble: currObj.dt * 2,
                cDoule: currObj.dt * 2,
                dDoule: currObj.dt * 2,
                eDoule: currObj.dt * 2,
                fDoule: currObj.dt * 2,
                gDoule: currObj.dt * 2
            });
        }
    }

    function defineNewKeys(dataColl) {
        console.log('starting to define keys to the objects');
        let currObj;

        for (let i = 0; i < dataColl.length; i++) {
            currObj = dataColl[i];
            Object.defineProperties(currObj, {
                dateTimeDoule: {
                    value: currObj.dt * 2,
                    writable: true
                },
                highDoule: {
                    value: currObj.dt * 2,
                    writable: true
                },
                lowDoule: {
                    value: currObj.dt * 2,
                    writable: true
                },
                aDoube: {
                    value: currObj.dt * 2,
                    writable: true
                },
                bDoble: {
                    value: currObj.dt * 2,
                    writable: true
                },
                cDoule: {
                    value: currObj.dt * 2,
                    writable: true
                },
                dDoule: {
                    value: currObj.dt * 2,
                    writable: true
                },
                eDoule: {
                    value: currObj.dt * 2,
                    writable: true
                },
                fDoule: {
                    value: currObj.dt * 2,
                    writable: true
                },
                gDoule: {
                    value: currObj.dt * 2,
                    writable: true
                }

                }
            );
        }
    }

    let dataColl = createObjects(450000);
    console.log('initial dataColl length', dataColl.length);

    setTimeout(() => {
        // startBloating(dataColl);
        startExtending(dataColl);
        // defineNewKeys(dataColl);
        // startAssigning(dataColl);
    }, 20000);

    return dataColl;
};