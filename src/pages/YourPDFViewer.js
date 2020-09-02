import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';



const YourPDFViewer =()=>{


 
  return (
    <Document file='https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'>
    	<Page/>

    </Document>
    );
}

export default YourPDFViewer

//https://arxiv.org/pdf/quant-ph/0410100.pdf