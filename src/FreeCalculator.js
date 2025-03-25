import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

function FreeCalculator() {

    const [range, setrange] = useState(30);
    const [int, setint] = useState();
    const [total, settotal] = useState({});

    const handlesubmit = (event) => {

        event.preventDefault();

        var rangeout;

        switch (range) {
            case 30: rangeout = (int) ? int * 15 / 100 : int;
                break;

            case 60: rangeout = (int) ? int * 15 / 100 * 2 : int;
                break;

            case 90: rangeout = (int) ? int * 15 / 100 * 3 : int;
                break;

            case 120: rangeout = (int) ? int * 15 / 100 * 4 : int;
                break;

            case 150: rangeout = (int) ? int * 15 / 100 * 5 : int;
                break;

            default: rangeout = int;
        }

        console.log(rangeout)

        const value1 = (int) ? int : int;
        const value2 = rangeout;
        const value3 = (int > 40) ? Number(int) * 5 / 100 : int;


        const subtotal = Number(value1) + Number(value2) + Number(value3) + 2

        const obj = { value1, value2, value3, subtotal }

        settotal(obj);

    }

    const marks = [
        {
            value: 0,
            label: '0 min',
        },
        {
            value: 30,
            label: '30 min',
        },
        {
            value: 60,
            label: '60 min',
        },
        {
            value: 90,
            label: '90 min',
        },

        {
            value: 120,
            label: '120 min',
        },

        {
            value: 150,
            label: '150 min',
        },
    ];

    function valuetext(value) {
        return `${value}`;
    }


    return (
        <div>


            <div className='d-flex justify-content-center py-5 border-bottom'>

                <div className='FreeCalculator' >

                    <div className=' text-center'>
                        <h2 className='fw-bold my-5'>Free Calculator</h2>
                        <h1 className=' display-4 fw-bold'>$ {(total.subtotal) ? total.subtotal.toFixed(2) : "0.00"}</h1>
                        <h6 className='mb-5 fw-bold'>Total Amount</h6>
                    </div>

                    <form onSubmit={handlesubmit}>
                        <div>
                            <label className={" form-label mb-2 fw-bold"} for="">Enter Free Amount</label>

                            <input

                                value={int}
                                onChange={(e) => setint((e.target.value))}
                                className={" form-control fw-bold btn-lg"} type="number" placeholder="$" />

                        </div>

                        <div className='my-4'>
                            <label className={" form-label mb-2 fw-bold"} for="">Increase Time</label>
                            <Box sx={{ width: "100%" }}>
                                <Slider
                                    aria-label="Always visible"
                                    getAriaValueText={valuetext}
                                    step={30}
                                    marks={marks}
                                    valueLabelDisplay="on"
                                    value={range}
                                    max={150}
                                    min={0}
                                    onChange={(e) => { setrange(e.target.value) }}

                                />
                            </Box>
                        </div>

                        <div className='p-3' style={{ background: "#edf3f7", borderRadius: "10px" }}>

                            <div className='d-flex justify-content-between border-bottom py-2'>

                                <h6>Flat Fee</h6>
                                <h6>$ {total.value1 || "0.00"}</h6>

                            </div>

                            <div className='d-flex justify-content-between border-bottom py-2'>

                                <h6>Flat Fee (15 %)</h6>

                                <h6>$ {total.value2 || "0.00"}</h6>

                            </div>

                            <div className='d-flex justify-content-between border-bottom py-2'>
                                <h6>Processing Fee</h6>
                                <h6>$ 2</h6>

                            </div>

                            <div className='d-flex justify-content-between border-bottom py-2'>
                                <h6>Extra (5% Above $40)</h6>
                                <h6>$  {total.value3 || "0.00"}</h6>

                            </div>

                            <div className='d-flex justify-content-between border-bottom py-2'>
                                <h6 className='fw-bold'>Total</h6>
                                {(total.subtotal) ? total.subtotal.toFixed(2) : "0.00"}

                            </div>

                        </div>

                        <button type="submit" data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-primary btn-lg btn-block my-4 w-100" style={{ background: "#006ebd" }}>
                            Calculate
                        </button>
                    </form>

                </div>

            </div>

        </div>
    )
}

export default FreeCalculator;
