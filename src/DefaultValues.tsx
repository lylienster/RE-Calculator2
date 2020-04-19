import React from "react";
import SingleInput from "./SingleInput";
import { FormData } from "./Calculator";
import { Button, Modal } from "react-bootstrap";

interface Props {
  defaults: FormData;
  handleOnSubmit: (defaults: FormData) => void;
}

const DefaultValues = ({ defaults, handleOnSubmit }: Props) => {
  const [localDefaults, setLocalDefaults] = React.useState({ ...defaults });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = event.target.value.replace(/,/g, "");
    if (!isNaN(Number(trimmedValue))) {
      setLocalDefaults({
        ...localDefaults,
        [event.target.name]: Number(trimmedValue),
      });
    }
  };

  const [showModal, setShowModal] = React.useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleOnSumbit = () => {
    handleOnSubmit(localDefaults);

    handleClose();
  };

  const {
    purchaseClosingCost,
    loanPeriod,
    loanInterestRate,
    downPaymentPercentage,
    vacancyRate,
    repairsRate,
    capitalExpendituresRate,
    insuranceRate,
    taxRate,
    propertyManagementRate,
    projectionYear,
    appreciation,
  } = localDefaults;

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="float-right">
        Edit Defaults
      </Button>
      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Defaults</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div>
              <SingleInput
                label="Purchase Closing Costs"
                inputName="purchaseClosingCost"
                inputValue={purchaseClosingCost}
                handleOnChange={handleOnChange}
                prefix={"$"}
              />
              <SingleInput
                label="Loan Period"
                inputName="loanPeriod"
                inputValue={loanPeriod}
                handleOnChange={handleOnChange}
                suffix={"years"}
                roundValue={false}
                isNumberInput
              />
              <SingleInput
                label="Interest Rate"
                inputName="loanInterestRate"
                inputValue={loanInterestRate}
                handleOnChange={handleOnChange}
                suffix={"%"}
                roundValue={false}
                isNumberInput
              />
              <SingleInput
                label="Down Payment Percentage"
                inputName="downPaymentPercentage"
                inputValue={downPaymentPercentage}
                handleOnChange={handleOnChange}
                suffix={"%"}
                roundValue={false}
                isNumberInput
              />
              <SingleInput
                label="Vacancy Rate"
                inputName="vacancyRate"
                inputValue={vacancyRate}
                handleOnChange={handleOnChange}
                suffix={"%"}
                roundValue={false}
                isNumberInput
              />
              <SingleInput
                label="Repair Percentage"
                inputName="repairsRate"
                inputValue={repairsRate}
                handleOnChange={handleOnChange}
                suffix={"%"}
                roundValue={false}
                isNumberInput
              />
              <SingleInput
                label="Capital Expenditure Percentage"
                inputName="capitalExpendituresRate"
                inputValue={capitalExpendituresRate}
                handleOnChange={handleOnChange}
                suffix={"%"}
                roundValue={false}
                isNumberInput
              />
              <SingleInput
                label="Insurance Rate"
                inputName="insuranceRate"
                inputValue={insuranceRate}
                handleOnChange={handleOnChange}
                suffix={"%"}
                roundValue={false}
                isNumberInput
              />
              <SingleInput
                label="Tax Rate"
                inputName="taxRate"
                inputValue={taxRate}
                handleOnChange={handleOnChange}
                suffix={"%"}
                roundValue={false}
                isNumberInput
              />
              <SingleInput
                label="Property Management Rate"
                inputName="propertyManagementRate"
                inputValue={propertyManagementRate}
                handleOnChange={handleOnChange}
                suffix={"%"}
                roundValue={false}
                isNumberInput
              />
              <SingleInput
                label="Projection Year"
                inputName="projectionYear"
                inputValue={projectionYear}
                handleOnChange={handleOnChange}
                suffix={"years"}
                roundValue={false}
                isNumberInput
              />
              <SingleInput
                label="Appreciation"
                inputName="appreciation"
                inputValue={appreciation}
                handleOnChange={handleOnChange}
                suffix={"%"}
                roundValue={false}
                isNumberInput
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleOnSumbit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DefaultValues;
