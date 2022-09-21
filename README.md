
# Note App

This application is completely free. We encrypt your passwords and all of your notes. Our main  purpose is provide a completely secure user experience

## Installation

git clone https://github.com/TarikSogukpinar/note.git

Node JS

```bash
  cd note
  cd server
  npm install
  npm start 

```

React

```bash
  cd note
  cd client
  npm install
  npm start

```
    
## Features

- Login / Register
- Create Note (end to end encryption)
- Update Note (end to end encryption)
- Delete Note
- Delete Account
- Docker Container


## Roadmap

- Forgot Password
- Update Password and Email
- Dark Mode
- Language Support (TR - EN)
- Swagger Documentation
- Profile Picture
- Date Time For Notes
- Profile Dashboard
- UI & UX Design





## Authors

- [@taylankalkan01](https://github.com/taylankalkan01)
- [@TarikSogukpinar](https://github.com/TarikSogukpinar)


## Feedback

If you have any feedback, please reach out to us at e.taylankalkan@hotmail.com & ledunv@protonmail.com


## Screenshots

![App Screenshot](https://cdn.discordapp.com/attachments/996926716540878951/1021935852072484894/unknown.png)

![App Screenshot](https://cdn.discordapp.com/attachments/996926716540878951/1021935709285789828/unknown.png)

![App Screenshot](https://cdn.discordapp.com/attachments/996926716540878951/1021935799601733733/unknown.png)

![Db Screenshot](https://cdn.discordapp.com/attachments/996926716540878951/1021936173171626044/unknown.png)

![Db Screenshot](https://cdn.discordapp.com/attachments/996926716540878951/1021935450807607326/unknown.png)


## Usage/Examples

```javascript
import CryptoJS from "crypto-js";

const AddNote = asyncHandler(async (req, res) => {
  const { title, content, category } = sanitize(req.body);

  const addNoteValidation = await noteValidationSchema.validateAsync(
    sanitize(req.body)
  );

  if (addNoteValidation) {
    const newNote = new Note({
      title: CryptoJS.AES.encrypt(
        title,
        process.env.CRYPTO_SECRET_KEY
      ).toString(),
      content: CryptoJS.AES.encrypt(
        content,
        process.env.CRYPTO_SECRET_KEY
      ).toString(),
      category: CryptoJS.AES.encrypt(
        category,
        process.env.CRYPTO_SECRET_KEY
      ).toString(),
      user_id: req.user.id
    });

    await newNote.save();

    res.status(201).json({ message: "Note created" });
  } else {
    return res.status(500).json({ message: error.message });
  }
});
```

