class Version {

    constructor(version) {
        let major = 1, minor = 0, patch = 0;
        if (version != null) {
            let values = version.split('.').slice(0, 3);
            if (values.some(isNaN)) {
                throw new Error('Error occurred while parsing version!');
            }
            major = Number.parseInt((values.shift()));
            minor |= Number.parseInt((values.shift()));
            patch |= Number.parseInt((values.shift()));
        }
        this.majorValue = major;
        this.minorValue = minor;
        this.patchValue = patch;
        this.hisotry = [];
    }

    major() {
        this.hisotry.push(this.release());
        this.majorValue += 1;
        this.minorValue = 0;
        this.patchValue = 0;
        return this;
    }

    minor() {
        this.hisotry.push(this.release());
        this.minorValue += 1;
        this.patchValue = 0;
        return this;
    }

    patch() {
        this.hisotry.push(this.release());
        this.patchValue += 1;
        return this;
    }

    rollback() {
        if (this.hisotry.length == 0) {
            throw new Error('Cannot rollback!');
        }
        const values = this.hisotry.pop().split('.');
        this.majorValue = Number.parseInt((values.shift()));
        this.minorValue = Number.parseInt((values.shift()));
        this.patchValue = Number.parseInt((values.shift()));
        return this;
    }

    release() {
        return `${this.majorValue}.${this.minorValue}.${this.patchValue}`;
    }
}

function testConstructor() {
    let versionA = new Version();
    console.log(versionA.release()); // 1.0.0

    let versionB = new Version('1');
    console.log(versionB.release()); // 1.0.0

    let versionC = new Version('1.2');
    console.log(versionC.release()); // 1.2.0

    let versionD = new Version('1.2.3');
    console.log(versionD.release()); // 1.2.3

    let versionE = new Version('1.2.3.a.b');
    console.log(versionE.release()); // 1.2.3

    ['a.2.3', '1.a.3', '1.2.a'].forEach(value => {
        try {
            new Version(value);
        } catch (e) {
            console.log(e.message);
        }
    });
}

function testVersionIncrease() {
    let version = new Version("1.2.3");
    console.log(version.release()); // 1.2.3
    version.patch();
    console.log(version.release()); // 1.2.4
    version.minor();
    console.log(version.release()); // 1.3.0
    version.major();
    console.log(version.release()); // 2.0.0
    version.major().minor().patch();
    console.log(version.release()); // 3.1.1
}

function testRollback() {
    let version = new Version();
    version.patch().minor();
    version.rollback();
    console.log(version.release()); // 1.0.1
    version.rollback();
    console.log(version.release()); // 1.0.0
    try {
        version.rollback()
    } catch (e) {
        console.log(e.message);
    }
}


testConstructor();
// testVersionIncrease();
// testRollback();