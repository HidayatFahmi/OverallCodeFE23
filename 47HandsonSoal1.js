/**
 * 1. Buatlah sebuah class Person yang menerima property
 * - nama
 * - gender
 * - energy -> PRIVATE PROPERTY
 *
 * Buat method
 * - makan -> energy + 5
 * - tidur -> energy + 10
 * - berjalan -> energy - 5
 * - berlari -> energy - 8
 * - setter dan getter method dari property private "energy"
 *
 * NOTES: Gunakan _ instead of # untuk private property agar dapat diakses pada child class
 *
 * Buat child class AnakAnak
 * - OVERRIDE method makan, tidur, berjalan dan berlari menggunakan penambahan dan pengurangan
 *   jumlah energy sesuai dengan usia.
 *    - makan -> energy + 10
 *    - tidur -> energy + 15
 *    - berjalan -> energy - 3
 *    - berlari -> energy - 5
 *    - TAMBAHKAN beberapa method spesifik yang dapat mengubah nilai dari energy
 */

const findCategory = (age, name, gender) => {
  if (age <= 10) return new BudakKecik(name, gender, age);
  else if (age >= 50) return new Lansia(name, gender, age);
  return new Person(name, gender);
};

class Person {
  _energy = 0;
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  set energy(chakra) {
    this._energy = chakra;
  }

  makan() {
    if (this.gender == "pria") {
      this._energy += 5;
      console.log(`${this.name} energi kamu bertambah 5`);
    } else {
      this._energy += 4;
      console.log(`${this.name} energi kamu bertambah 4`);
    }
  }

  tidur() {
    if (this.gender == "pria") {
      this._energy += 10;
      console.log(`${this.name} energi kamu bertambah 10`);
    } else {
      this._energy += 9;
      console.log(`${this.name} energi kamu bertambah 9`);
    }
  }
  berjalan() {
    if (this.gender == "pria") {
      this._energy -= 5;
      console.log(`${this.name} energi kamu berkurang 5`);
    } else {
      this._energy -= 6;
      console.log(`${this.name} energi kamu berkurang 6`);
    }
  }
  berlari() {
    if (this.gender == "pria") {
      this._energy -= 8;
      console.log(`${this.name} energi kamu berkurang 8`);
    } else {
      this._energy -= 9;
      console.log(`${this.name} energi kamu berkurang 9`);
    }
  }

  get energy() {
    console.log(`${this.name} energi kamu sekarang adalah ${this._energy}`);
    return this._energy;
  }
}

class Lansia extends Person {
  constructor(name, gender, age) {
    super(name, gender);
    this.age = age;
  }

  makan() {
    if (this.gender == "pria") {
      this._energy += 3;
      console.log(`kek ${this.name} energi anda bertambah 3`);
    } else {
      this._energy += 2;
      console.log(`nek ${this.name} energi anda bertambah 2`);
    }
  }

  tidur() {
    if (this.gender == "pria") {
      this._energy += 5;
      console.log(`kek ${this.name} energi anda bertambah 5`);
    } else {
      this._energy += 4;
      console.log(`nek ${this.name} energi anda bertambah 4`);
    }
  }
  berjalan() {
    if (this.gender == "pria") {
      this._energy -= 8;
      console.log(`kek ${this.name} energi anda berkurang 8`);
    } else {
      this._energy -= 9;
      console.log(`nek ${this.name} energi anda berkurang 9`);
    }
  }
  berlari() {
    if (this.gender == "pria") {
      this._energy -= 10;
      console.log(`kek ${this.name} energi anda berkurang 10`);
    } else {
      this._energy -= 11;
      console.log(`nek ${this.name} energi anda berkurang 11`);
    }
  }
}

class BudakKecik extends Person {
  constructor(name, gender, age) {
    super(name, gender);
    this.age = age;
  }

  makan() {
    if (this.gender == "pria") {
      this._energy += 7;
      console.log(`adek ${this.name} ganteng, energi kamu bertambah 7`);
    } else {
      this._energy += 6;
      console.log(`adek ${this.name} cantik, energi kamu bertambah 6`);
    }
  }

  tidur() {
    if (this.gender == "pria") {
      this._energy += 12;
      console.log(`adek ${this.name} ganteng, energi kamu bertambah 12`);
    } else {
      this._energy += 11;
      console.log(`adek ${this.name} cantik, energi kamu bertambah 11`);
    }
  }
  berjalan() {
    if (this.gender == "pria") {
      this._energy -= 3;
      console.log(`adek ${this.name} ganteng, energi kamu berkurang 3`);
    } else {
      this._energy -= 4;
      console.log(`adek ${this.name} cantik, energi kamu berkurang 4`);
    }
  }
  berlari() {
    if (this.gender == "pria") {
      this._energy -= 5;
      console.log(`adek ${this.name} ganteng, energi kamu berkurang 5`);
    } else {
      this._energy -= 6;
      console.log(`adek ${this.name} cantik, energi kamu berkurang 6`);
    }
  }
}

let fahmi = new Person("fahmi", "pria");
console.log(fahmi.energy);
fahmi.energy = 50;

let hidayat = findCategory(25, "hidayat", "pria");
console.log(hidayat.name);
console.log(hidayat.gender);
console.log(hidayat.energy);
hidayat.energy = 77;
hidayat.makan();
console.log(hidayat.energy);

let alex = findCategory(9, "alex", "pria");
console.log(alex.name);
console.log(alex.energy);
alex.energy = 30;
alex.makan();
console.log(alex.energy);
