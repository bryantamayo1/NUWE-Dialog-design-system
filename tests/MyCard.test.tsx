import {describe, test}     from 'vitest';
import {render}             from '@testing-library/react';
import { MyButtons }        from '../src/components/MyButtons';

describe("MyCard test", () => {
    test("MyCard exists?", () => {
        const component = render(<MyButtons state="success"/>);
        component.getByText("Cerrar pestaña");
    })
})