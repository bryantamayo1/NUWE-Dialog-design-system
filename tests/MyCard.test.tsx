import {describe, test} from 'vitest';
import {render} from '@testing-library/react';
import {MyCard} from '../src/components/MyCard';

describe("MyCard test", () => {
    test("MyCard exists?", () => {
        const component = render(<MyCard/>);
        component.getByText("MyCard");
    })
})