import React from "react";
import { render, screen } from '@testing-library/react';
import Login from "./Login";

test('render login page', () => {
    render(<Login />)
});