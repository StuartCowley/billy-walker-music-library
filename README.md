# Music Library

This is a simple music library database that can track artists and their genres using JavaScript and postgreSQL

## Installation

Pull the github repository to your local machine, cd into music-library directory, and run:

```bash
npm install
```
to install dependencies before use.

## Usage

```bash
# starts application
npm start
```

You can access the database through your web browser or similar tools.
```bash
# lists artists
http://localhost:3000/artists

# lists specific artist by ID
http://localhost:3000/artists/:id 
```

Use Postman (https://www.postman.com/downloads/) to send more detailed requests to the server. This app supports `GET`, `PUSH`, `DELETE` and `POST` requests.


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

No license.

# Backend app

This app was created with `@command-shift/create-backend-app`
