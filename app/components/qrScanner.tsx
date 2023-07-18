'use client'

import { Html5QrcodeScanner } from "html5-qrcode"
import Link from "next/link";
import { useEffect, useState } from "react";
import Locator from './geolocationer';
import CityFinder from "./cityFinder";
import ImageCreator from "./imageContainer";

const QrScanner = () => {

    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner(
            "reader",
            { fps: 10, qrbox: { width: 25, height: 25} },
            /* verbose= */ false);


        function success(result : any) {
            scanner.clear();
            setScanResult(result);
            <ImageCreator />
        }

        function error(err : any) {
            console.warn(err);
        }

        scanner.render(success, error);
    }, []);


    return (
        <div>
             <div className="justify-center"> Quick Scan on the Qr code on the label to get the details about the steps used to create this Product!

        </div>

            {scanResult
                ? <div> Success : <Link href={"http://" + scanResult}/> {scanResult}  </div>
                : <div id="reader"></div>
            }


        </div>
    )
}

export default QrScanner;