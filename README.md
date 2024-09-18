# TRON-UI

Ui-library is an open source react component library that implements new design's. It's comprehensive and can be used in production out of the box.

## Installation

Install the necessary packages in your project directory with:

```bash
npm i tron-ui
```

## Usage

Here’s an example of how to use the Button and Modal components in your React application:

```bash
"use client";
import { useState } from "react";
import { Button, Modal } from "tron-ui";
import "tron-ui/dist/styles.css"; // Import the styles

const Page = () => {
const [open, setOpen] = useState(false);

const toggleModal = () => {
setOpen((prev) => !prev);
};

return (

<div className="p-6">
<Button onClick={toggleModal} color="error">
Open Modal
</Button>
<Modal onClose={toggleModal} open={open}>
<div>Modal Content</div>
</Modal>
</div>
);
};

export default Page;
```

## Components

<b>Button:</b>
A versatile button component with customizable properties.

Props:
onClick (function): Callback function triggered when the button is clicked.
color (string): Defines the button color (e.g., "primary","secondary", "error").

<br>

<b>Modal:</b>
A modal dialog component for displaying overlay content.

Props:

onClose (function): Callback function triggered when the modal is closed.
open (boolean): Controls the visibility of the modal.

## Styles

To ensure your components are styled correctly, import the tron-ui styles in your project:

```bash
import "tron-ui/dist/styles.css";
```
