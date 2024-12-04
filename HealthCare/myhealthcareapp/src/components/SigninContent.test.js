import React from 'react';
import { render, screen } from "@testing-library/react";
import SigninContent from "./SigninContent";

test('Renders the form heading 1', () => {
    render(<SigninContent />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
});

test('form validation for name', () => {
    render(<SigninContent />);
    const nameLabel = screen.getByText("Full Name")
    expect(nameLabel).toBeInTheDocument();
});

test('form validation for email', () => {
    render(<SigninContent />);
    const emailLabel = screen.getByText("Email")
    expect(emailLabel).toBeInTheDocument();
});

test('form validation for phone number', () => {
    render(<SigninContent />);
    const phoneLabel = screen.getByText("Telephone")
    expect(phoneLabel).toBeInTheDocument();
});

test('form validation for date and time', () => {
    render(<SigninContent />);
    const dateAndTimeLabel = screen.getByText("Date and Time")
    expect(dateAndTimeLabel).toBeInTheDocument();
});