import { useHistory } from "react-router-dom";
import { useData } from "./dataHandler";
import { useState, useEffect } from "react";

export default function useBookings() {
    const history = useHistory();
    const [bookedShowData, setBookedShowData] = useState([]);

    const API_URL = "https://api.tvmaze.com/search/shows?q=all";
    const { data } = useData(API_URL);

    useEffect(() => {
        if (!localStorage.bookings) return;
        else {
            let allBookingIds = JSON.parse(localStorage.bookings);
            let filtered = data.filter((item) => {
                return allBookingIds.includes(item.show.id);
            });
            setBookedShowData(filtered);
        }
    }, [data])


    function bookMovie(e, movieId) {
        e.preventDefault();

        if (!localStorage.bookings) {
            let bookings = [movieId];
            localStorage.setItem('bookings', JSON.stringify(bookings));
        } else {
            let bookings = JSON.parse(localStorage.bookings);
            if (!bookings.includes(movieId)) {
                bookings.push(movieId);
            }
            localStorage.setItem('bookings', JSON.stringify(bookings));
        }
        history.push('/bookings');
    }

    function updateBookings() {
        if (!localStorage.bookings) return;
        else {
            let allBookingIds = JSON.parse(localStorage.bookings);
            let filtered = data.filter((item) => {
                return allBookingIds.includes(item.show.id);
            });
            setBookedShowData(filtered);
        }
    }

    function isBooked(movieId) {
        if (!localStorage.bookings) {
            return false;
        } else {
            let bookings = JSON.parse(localStorage.bookings);
            return bookings.includes(movieId);
        }
    }

    function removeBooking(movieId) {
        if (!localStorage.bookings) return;
        else {
            let bookings = JSON.parse(localStorage.bookings);
            const position = bookings.indexOf(movieId);
            bookings.splice(position, 1)
            localStorage.setItem('bookings', JSON.stringify(bookings));
            updateBookings();
        }
    }

    return { bookMovie, updateBookings, bookedShowData, isBooked, removeBooking };
}