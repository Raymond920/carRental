export interface Car {
    id: string;
    model: string;
    price: number;
    image?: string;
    category: string;
    availability: number;
    description?: string;
    fuel_type?: string;
    mileage?: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    ic_number: string;
    phone_number: string;
};

export type Renter = {
    name: string;
    email: string;
    ic: string;
    phone_no: string;
}

export type Booking = {
    car_id: string;
    user_id: string;
    start_date: string;
    end_date: string;
    booking_date: string;
    price: string;
    payment: string;
    renter: Renter;
}

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Register: undefined;
    CarTabs: undefined;
    CarDetail: { car: Car };
    Booking: { car: Car };
    DrawerMenu: undefined;
    BookingConfirm: { bookingID: string, bookingData: Booking };
};

export type DrawerParamList = {
    Profile: undefined;
    Notification: undefined;
    MainApp: undefined;
    EditProfile: undefined;
};
