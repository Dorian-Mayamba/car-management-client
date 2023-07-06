import { useEffect, useState } from "react";
import '../../styles/cars.css';

export default function Cars() {
    return (
        <section className="cars-box">
            <div className="cars-banner">
            </div>
            <aside className="cars-filter">
                <form>
                    <div className="form-select-group">
                        <select name="car-model" id="car-model">
                            <option value="" defaultChecked>Default Model</option>
                        </select>
                        <select name="car-make" id="car-make">
                            <option value="" defaultChecked>Default make</option>
                        </select>
                        <select name="car-name" id="car-name">
                            <option value="" defaultChecked>Default name</option>
                        </select>
                    </div>
                </form>
            </aside>
        </section>
    );
}