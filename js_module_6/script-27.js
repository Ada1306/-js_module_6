class Abonent {
    constructor(name, phoneNumber) {
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    setPhoneNumber(newPhoneNumber) {
        this.phoneNumber = newPhoneNumber;
    }

    getInfo() {
        return `Name: ${this.name}, Phone Number: ${this.phoneNumber}`;
    }
}

// Створюємо три різних користувачів
let user1 = new Abonent("Ivan", "123-456-789");
let user2 = new Abonent("Petro", "987-654-321");
let user3 = new Abonent("Olena", "456-789-123");

// Виводимо дані користувачів
console.log(user1.getInfo());
console.log(user2.getInfo());
console.log(user3.getInfo());

