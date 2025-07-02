> [!NOTE]
> This project is academic coursework for UECS3253 Wireless Application Development module.

# Car Rental Application
![452744983-b1b1bd8b-01d7-4cc4-9268-237aedab077a](https://github.com/user-attachments/assets/e9cacc43-2880-42eb-bf7a-25091cb97f8f)

A full-stack car rental management application with a React Native mobile client and authentication backend.

## Project Structure

This project consists of the following main components:

- `android-client/`: React Native mobile application
- `auth-service/`: Flask-based authentication backend
- `chat-ws/`: WebSocket for chat fetching and storing

## Features

### Mobile Application
- User authentication (login/registration)
- Browse cars by category (SUV, Sedan, Luxury)
- Car details view with specifications
- Booking system with date selection
- Online payment processing
- Booking confirmation and history
- Offline functionality with SQLite data storage
- Firebase integration for data management

### Authentication Service
- User registration with email, password, name, IC number, and phone number
- Secure login with JWT authentication
- User profile management
- SQLite database for user storage

## Technical Stack

### Mobile Client
- React Native
- Firebase Firestore
- SQLite (local storage)
- React Navigation
- Linear Gradient
- Vector Icons

### Authentication Service
- Flask
- SQLite
- JWT Authentication

## 📱 Features Preview

### 🔐 Login  
Authenticate with email and password.  
![Login](https://github.com/user-attachments/assets/acbc575d-698e-4885-bdf7-a17941565f7c)

---

### 🚗 Car List  
Browse available cars by category.  
![Car List](https://github.com/user-attachments/assets/457c5eda-e421-4556-bf39-617b331c1607)

---

### 💬 Live Chat  
Real-time chat with car owners.  
![Chat](https://github.com/user-attachments/assets/23412028-d63f-4e81-b421-4ca2f0a3f564)

---

### 📆 Booking  
Select dates and book your car instantly.  
![Booking](https://github.com/user-attachments/assets/528eba8c-cd98-4f5c-83dc-684b75e25020)

---

### 🧾 Booking History  
View past booking details.  
![Booking History](https://github.com/user-attachments/assets/7b9a98e7-ed68-4e00-beb0-08a1feb5203c)

---

### 🗂️ Chat History  
Access previous conversations.  
![Chat History](https://github.com/user-attachments/assets/9d76657a-85e6-4629-8ab4-de05be19eb20)

---

### 🌙 Dark Theme  
Optional dark mode for night use.  
![Dark Theme](https://github.com/user-attachments/assets/c1c3eb6b-fb2c-47c3-849d-0600766b6c91)

---

### 📤 Car Listing  
Post your own vehicle for rental.  
![Car Listing](https://github.com/user-attachments/assets/df4a16c9-a2dd-49ee-8e82-ce71d79490dd)

---

### ✏️ Update Car Detail  
Edit existing vehicle information.  
![Update Car](https://github.com/user-attachments/assets/591b32af-c2b7-4171-a3b2-72a4e012a4ca)

---

### ❌ Delete Car Listing  
Remove your listed vehicle.  
![Delete Car](https://github.com/user-attachments/assets/e86e8888-e2bf-464b-b4a9-9c57d4cae370)

---

### 🚪 Logout  
End session and return to login screen.  
![Logout](https://github.com/user-attachments/assets/38ffd208-4bdd-4c54-afc0-8bc846fc66e7)


## Getting Started

### Setting Up the React Native Client

1. Navigate to the Android client directory:
```bash
cd android-client
```

2. Install dependencies:
```bash
npm install
```

3. Add Firebase configuration:
   - Download your `google-services.json` file from Firebase Console
   - Place it in the `android/app/` directory

4. Clean previous builds:
```bash
cd android
./gradlew clean
cd ..
```

5. Start the app:
```bash
npm start
```

### Setting Up the Authentication Service

1. Navigate to the authentication service directory:
```bash
cd auth-service
```

2. Install dependencies:
```bash
poetry install
```

3. Run the server:
```bash
poetry run python server.py
```

The authentication server will start on port 5000: http://localhost:5000
### Setting Up the Chat WebSocket

1. Navigate to the Chat WebSocket directory:
```bash
cd chat-ws
```

2. Run the websocket server:
```bash
python chatWebSocket.py
```

The WebSocket server will start on port 5001: http://localhost:5001
## Integration

To connect the React Native app with the authentication service, create a `config.json` file in your React Native project's `src` directory:

```json
{
  "FLASK_API": "http://10.0.2.2:5000",  // For Android emulator
  // Use "http://localhost:5000" for iOS simulator
  // Use "http://YOUR_IP_ADDRESS:5000" for physical devices
  "WEBSOCKET_SERVER": "http://10.0.2.2:5001" // For Android emulator
  // Use "http://localhost:5001" for iOS simulator
  // Use "http://YOUR_IP_ADDRESS:5001" for physical devices
}
```

Then import it in your files:

```typescript
// Direct import
import config from '../../config.json';

// Then use it like:
const apiUrl = config.FLASK_API;
```

Make sure your `tsconfig.json` has JSON module resolution enabled:

```json
{
  "compilerOptions": {
    "resolveJsonModule": true,
    // ... other options
  }
}
```

## 📜 Contributors

See the full list of contributors in [CONTRIBUTORS.md](./CONTRIBUTORS.md).

## License

This project is licensed under the MIT License.
