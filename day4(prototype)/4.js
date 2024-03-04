function user(firstname,lastname,avt) {
    this.firstname = firstname,
    this.lastname = lastname,
    this.avt = avt
    this.getName= ()=>{
        return `${this.firstname}${this.lastname}`
    }
user.prototype.classname = 'F8'
}
let author = new user ('thu','hien','avt')
let ur = new user('vu','thu','avt')
author.title = 'chia sẻ dạo tai f8'
ur.comment = 'liểu có khoá nào k ad'
console.log(ur);
console.log(author); 