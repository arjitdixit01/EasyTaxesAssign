import React, { useState } from 'react';
import "./FormComponent.css"
function FormComponent() {
  const [email, setEmail] = useState('');
  const [filedReturns, setFiledReturns] = useState('no');
  const [incorporated2022, setIncorporated2022] = useState('no');
  const [transactions2022, setTransactions2022] = useState({
    capitalInfusion: false,
    capitalWithdrawal: false,
    relatedPartyTransaction: false,
  });
  const [additionalDocuments, setAdditionalDocuments] = useState({
    bankStatements: false,
    creditCardStatements: false,
    form10991: false,
    form940941: false,
    einCertificates: false,
    irsAcceptanceLetter: false,
    financials: false,
  });

  const handleAdditionalDocsCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setAdditionalDocuments((prevDocs) => ({
      ...prevDocs,
      [name]: checked,
    }));
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setTransactions2022((prevTransactions) => ({
      ...prevTransactions,
      [name]: checked,
    }));
  };

  const handleRadioChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleFileUpload = (event) => {
    // Handle file upload logic here
    console.log("Uploaded file:", event.target.files[0]);
  };

  return (
    <div className="form-container">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
      />

      <div className="radio-container">
        <label>Filed Returns last year:</label>
        <div>
          <input
            type="radio"
            id="yesFiled"
            value="yes"
            checked={filedReturns === 'yes'}
            onChange={(e) => handleRadioChange(e, setFiledReturns)}
          />
          <label htmlFor="yesFiled">Yes</label>
        </div>
        <div>
          <input
            type="radio"
            id="noFiled"
            value="no"
            checked={filedReturns === 'no'}
            onChange={(e) => handleRadioChange(e, setFiledReturns)}
          />
          <label htmlFor="noFiled">No</label>
        </div>
      </div>

     

      <div className="file-upload">
        <label>File Upload :</label>
        <input type="file" onChange={handleFileUpload} />
      </div>
      <div className="radio-container">
        <label>Was the S-corp incorporated in 2022?</label>
        <div>
          <input
            type="radio"
            id="yesInc"
            value="yes"
            checked={incorporated2022 === 'yes'}
            onChange={(e) => handleRadioChange(e, setIncorporated2022)}
          />
          <label htmlFor="yesInc">Yes</label>
        </div>
        <div>
          <input
            type="radio"
            id="noInc"
            value="no"
            checked={incorporated2022 === 'no'}
            onChange={(e) => handleRadioChange(e, setIncorporated2022)}
          />
          <label htmlFor="noInc">No</label>
        </div>
      </div>


      <div className="file-upload">
        <label>Please Upload the Incorporation Documents :</label>
        <input type="file" onChange={handleFileUpload} />
      </div>
      <div className="radio-container">
        <label>Was there any change in Ownership Structure in 2022 ?</label>
        <div>
          <input
            type="radio"
            id="yesInc"
            value="yes"
            checked={incorporated2022 === 'yes'}
            onChange={(e) => handleRadioChange(e, setIncorporated2022)}
          />
          <label htmlFor="yesInc">Yes</label>
        </div>
        <div>
          <input
            type="radio"
            id="noInc"
            value="no"
            checked={incorporated2022 === 'no'}
            onChange={(e) => handleRadioChange(e, setIncorporated2022)}
          />
          <label htmlFor="noInc">No</label>
        </div>
      </div>



      <div className="file-upload">
        <label>Upload Latest Shareholding Pattern :</label>
        <input type="file" onChange={handleFileUpload} />
      </div>

      
      <div className="button-container">
        <button className="save-button">Save</button>
        <button className="next-button">Next</button>
      </div>

      <div className="checkbox-container">
        <label>Were there any following transactions in 2022?</label>
        <div>
          <input
            type="checkbox"
            id="capitalInfusion"
            name="capitalInfusion"
            checked={transactions2022.capitalInfusion}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="capitalInfusion">Capital Infusion</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="capitalWithdrawal"
            name="capitalWithdrawal"
            checked={transactions2022.capitalWithdrawal}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="capitalWithdrawal">Capital Withdrawal</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="relatedPartyTransaction"
            name="relatedPartyTransaction"
            checked={transactions2022.relatedPartyTransaction}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="relatedPartyTransaction">Related Party Transaction</label>
        </div>
      </div>

      <div className="file-upload">
        <label>Upload Documents for the Same:</label>
        <input type="file" onChange={handleFileUpload} />
      </div>


      <div className="checkbox-container">
  <label>Please upload the following documents:</label>
  <div>
    <input
      type="checkbox"
      id="bankStatements"
      name="bankStatements"
      checked={additionalDocuments.bankStatements}
      onChange={handleAdditionalDocsCheckboxChange}
    />
    <label htmlFor="bankStatements">Bank Statements</label>
  </div>

  <div>
    <input
      type="checkbox"
      id="creditCardStatements"
      name="creditCardStatements"
      checked={additionalDocuments.creditCardStatements}
      onChange={handleAdditionalDocsCheckboxChange}
    />
    <label htmlFor="bankStatements">Credit Card Statements</label>
  </div>

  <div>
    <input
      type="checkbox"
      id="form10991"
      name="form10991"
      checked={additionalDocuments.form10991}
      onChange={handleAdditionalDocsCheckboxChange}
    />
    <label htmlFor="bankStatements">Form 10991</label>
  </div>

  <div>
    <input
      type="checkbox"
      id="einCertificates"
      name="einCertificates"
      checked={additionalDocuments.einCertificates}
      onChange={handleAdditionalDocsCheckboxChange}
    />
    <label htmlFor="bankStatements">EIN Certificate</label>
  </div>

  <div>
    <input
      type="checkbox"
      id="form940941"
      name="form940941"
      checked={additionalDocuments.form940941}
      onChange={handleAdditionalDocsCheckboxChange}
    />
    <label htmlFor="bankStatements">Form 940941</label>
  </div>

  <div>
    <input
      type="checkbox"
      id="irsAcceptanceLetter"
      name="irsAcceptanceLetter"
      checked={additionalDocuments.irsAcceptanceLetter}
      onChange={handleAdditionalDocsCheckboxChange}
    />
    <label htmlFor="bankStatements">Acceptance Letter</label>
  </div>
  <div>
    <input
      type="checkbox"
      id="financials"
      name="financials"
      checked={additionalDocuments.financials}
      onChange={handleAdditionalDocsCheckboxChange}
    />
    <label htmlFor="bankStatements">Financials</label>
  </div>


  </div>
  
        <div className="file-upload">
       
        <input type="file" onChange={handleFileUpload} />
        </div>

    <p> Please Complete the Payment within 48 hours</p>
     
    <div className="form-container">
      <label htmlFor="email">Enter Coupon :</label>
      
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your Coupon"
      />
      <div className="button">
        <button className="save-button">Apply</button> 
      </div>
     </div>

     <div className="button-container">
        <button className="next-button">Back</button>
        <button className="next-button">Save</button>
        <button className="next-button">Submit</button>
      </div>

    </div>

  );
}

export default FormComponent;




