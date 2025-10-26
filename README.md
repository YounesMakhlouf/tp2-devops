# Hello Node.js Application

A simple Node.js application with Express that provides a hello endpoint.

## Installation

```bash
npm install
```

## Running the Application

```bash
npm start
```

The server will start on port 3000 (or the PORT environment variable if set).

## Endpoints

- `GET /` - Welcome message
- `GET /hello` - Returns a hello message

## Example

Visit `http://localhost:3000/hello` to get:
```json
{
  "message": "Hello, World!"
}
```
