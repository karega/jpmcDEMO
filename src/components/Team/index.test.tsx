import ReactDOM from 'react-dom/client';
import {cleanup, render, screen} from '@testing-library/react';
import {act} from 'react-dom/test-utils';
import Team from './index';
import axios from 'axios';

let container: HTMLDivElement;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
});

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Team', () => {
    test('render without error', async () => {
        await act(async () => {
            mockedAxios.get.mockImplementationOnce(() => Promise.resolve({
                data: [
                    {
                        "id": 1,
                        "name": "Leanne Graham",
                        "username": "Bret",
                        "email": "Sincere@april.biz",
                        "address": {
                            "street": "Kulas Light",
                            "suite": "Apt. 556",
                            "city": "Gwenborough",
                            "zipcode": "92998-3874",
                            "geo": {
                                "lat": "-37.3159",
                                "lng": "81.1496"
                            }
                        },
                        "phone": "1-770-736-8031 x56442",
                        "website": "hildegard.org",
                        "company": {
                            "name": "Romaguera-Crona",
                            "catchPhrase": "Multi-layered client-server neural-net",
                            "bs": "harness real-time e-markets"
                        }
                    }
                ]
            }));

            await act(async () => {
                mockedAxios.get.mockImplementationOnce(() => Promise.resolve({
                    data: [
                        {
                            "id": 1,
                            "name": "Leanne Graham",
                            "username": "Bret",
                            "email": "Sincere@april.biz",
                            "address": {
                                "street": "Kulas Light",
                                "suite": "Apt. 556",
                                "city": "Gwenborough",
                                "zipcode": "92998-3874",
                                "geo": {
                                    "lat": "-37.3159",
                                    "lng": "81.1496"
                                }
                            },
                            "phone": "1-770-736-8031 x56442",
                            "website": "hildegard.org",
                            "company": {
                                "name": "Romaguera-Crona",
                                "catchPhrase": "Multi-layered client-server neural-net",
                                "bs": "harness real-time e-markets"
                            }
                        }
                    ]
                }));

                const {getByText} = render(<Team />);
            });
        });

        const _team = screen.getByRole('button');
        expect(await _team).toBeInTheDocument();
    });

    test('render with error', async () => {
        await act(async () => {
            mockedAxios.get.mockImplementationOnce(() => Promise.reject(false));

            await act(async () => {
                mockedAxios.get.mockImplementationOnce(() => Promise.resolve({
                    data: [
                        {
                            "id": 1,
                            "name": "Leanne Graham",
                            "username": "Bret",
                            "email": "Sincere@april.biz",
                            "address": {
                                "street": "Kulas Light",
                                "suite": "Apt. 556",
                                "city": "Gwenborough",
                                "zipcode": "92998-3874",
                                "geo": {
                                    "lat": "-37.3159",
                                    "lng": "81.1496"
                                }
                            },
                            "phone": "1-770-736-8031 x56442",
                            "website": "hildegard.org",
                            "company": {
                                "name": "Romaguera-Crona",
                                "catchPhrase": "Multi-layered client-server neural-net",
                                "bs": "harness real-time e-markets"
                            }
                        }
                    ]
                }));

                const {getByText} = render(<Team />);
            });
        });

        const _error = screen.getByRole('alert');
        expect(await _error).toBeInTheDocument();
    });

    // test('does not render team list', async () => {
    //     render(<Team/>);
    //     const _team = screen.getByRole('button');
    //     expect(_team).toBeInTheDocument();
    // });
})

