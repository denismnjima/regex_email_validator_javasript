let emails = ['.denis.njima@gmail.com','denisnjima@gmail.com','23denisnjima@gmmail.com','-denis','@','samuel@', 'denis@gmail','denis@gmail123.org']
let regex = /^[A-Z0-9.]+[@][\w]+\.[a-z]{2,}/i
emails.map((email)=>{
    console.log(email.match(regex))
})