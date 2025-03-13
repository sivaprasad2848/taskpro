import React, { useState } from "react";
import FormField from "../Molecules/FormField";
import Label from "../Atoms/Label";

const OutwardInvoice: React.FC = () => {
  const [invoice, setInvoice] = useState({
    docNo: "",
    docDate: "",
    taxMode: "ZERO TAX",
    customer: "CASH CUSTOMER",
    paymentMode: "CASH",
    account: "CASH",
    referenceNo: "",
    referenceDate: "",
    creditPeriod: "",
    printRequired: false,
    items: [],
    discount: 0,
    rounding: 0,
    address1: "",
    address2: "",
    address3: "",
    telephone: "",
    mobile: "",
    taxRegNo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoice({ ...invoice, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setInvoice({ ...invoice, printRequired: e.target.checked });
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = invoice.items.map((item, i) =>
      i === index ? { ...item, [field]: value, netAmount: field === "quantity" || field === "rate" ? item.quantity * item.rate : item.netAmount } : item
    );
    setInvoice({ ...invoice, items: updatedItems });
  };

  const addItem = () => {
    setInvoice({
      ...invoice,
      items: [
        ...invoice.items,
        { description: "", hsnCode: "", quantity: "", unit: "", rate: "", netAmount: "", tax: "" },
      ],
    });
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      {/* <h2 className="text-xl font-semibold mb-4">Outward Invoice</h2> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-gray-100 p-4 rounded-md">
        <div className="flex flex-col space-y-2">
          {[{ label: "Doc No", name: "docNo", type: "text" },
          { label: "Doc Date", name: "docDate", type: "date" }].map(({ label, name, type }) => (
            <div key={name} className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <Label text={label} htmlFor={name} />
              <div className="w-full sm:w-1/2">
                <FormField name={name} type={type} value={invoice[name]} onChange={handleInputChange} />
              </div>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <Label text="Tax Mode" htmlFor="taxMode" />
            <div className="w-full sm:w-1/2">
              <FormField name="taxMode" type="text" value={invoice.taxMode} onChange={handleInputChange} />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <Label text="Print Required" htmlFor="printRequired" />
            <input
              type="checkbox"
              id="printRequired"
              name="printRequired"
              checked={invoice.printRequired}
              onChange={handleCheckboxChange}
              className="w-4 h-4"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          {[{ label: "Customer", name: "customer", type: "text" },
          { label: "Payment Mode", name: "paymentMode", type: "text" },
          { label: "Account", name: "account", type: "text" }].map(({ label, name, type }) => (
            <div key={name} className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <Label text={label} htmlFor={name} />
              <div className="w-full sm:w-1/2">
                <FormField name={name} type={type} value={invoice[name]} onChange={handleInputChange} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-2">
          {[{ label: "Reference No", name: "referenceNo", type: "text" },
          { label: "Reference Date", name: "referenceDate", type: "date" },
          { label: "Credit Period", name: "creditPeriod", type: "text" }].map(({ label, name, type }) => (
            <div key={name} className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <Label text={label} htmlFor={name} />
              <div className="w-full sm:w-1/2">
                <FormField name={name} type={type} value={invoice[name]} onChange={handleInputChange} />
              </div>
            </div>
          ))}
        </div>
      </div>


      <h3 className="text-lg font-medium mt-4">Items</h3>
      <button onClick={addItem} className="bg-blue-500 text-white p-2 mt-2 rounded">Add Item</button>

      {/* Render items dynamically */}
      {invoice.items.map((item, index) => (
        <div key={index} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 mt-2 border p-2">
          <FormField label="Description" name={`description-${index}`} type="text" value={item.description} onChange={(e) => handleItemChange(index, "description", e.target.value)} />
          <FormField label="HSN Code" name={`hsnCode-${index}`} type="text" value={item.hsnCode} onChange={(e) => handleItemChange(index, "hsnCode", e.target.value)} />
          <FormField label="Quantity" name={`quantity-${index}`} type="number" value={String(item.quantity)} onChange={(e) => handleItemChange(index, "quantity", Number(e.target.value))} />
          <FormField label="Unit" name={`unit-${index}`} type="text" value={item.unit} onChange={(e) => handleItemChange(index, "unit", e.target.value)} />
          <FormField label="Rate" name={`rate-${index}`} type="number" value={String(item.rate)} onChange={(e) => handleItemChange(index, "rate", Number(e.target.value))} />
          <FormField label="Net Amount" name={`netAmount-${index}`} type="number" value={String(item.quantity * item.rate)} disabled />
          <FormField label="Tax %" name={`tax-${index}`} type="number" value={String(item.tax)} onChange={(e) => handleItemChange(index, "tax", Number(e.target.value))} />
        </div>
      ))}

      {/* Show Subtotal only if items exist */}
      {invoice.items.length > 0 && (
        <div className="mt-4 p-2 border-t">
          {/* Subtotal Section */}
          <div className="flex flex-col sm:flex-row justify-end items-center mb-2">
            <label className="text-lg font-medium sm:mr-2 w-full sm:w-24 text-right">Sub Total</label>
            <FormField
              label="Subtotal"
              name="subtotal"
              type="number"
              value={invoice.items.reduce((total, item) => total + item.quantity * item.rate, 0)}
              disabled
              className="border p-2 w-full sm:w-32 text-right"
            />
          </div>

          {/* Discount Section */}
          <div className="flex flex-col sm:flex-row justify-end items-center mb-2">
            <label htmlFor="applyDiscount" className="text-lg font-medium sm:mr-2 w-full sm:w-24 text-right">Discount</label>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="applyDiscount"
                checked={invoice.applyDiscount}
                onChange={(e) => setInvoice({ ...invoice, applyDiscount: e.target.checked })}
                className="mr-2"
              />
              <label className="text-lg font-medium mx-2">%</label>
              <FormField
                name="discountPercentage"
                type="number"
                value={invoice.discountPercentage || ""}
                onChange={(e) => setInvoice({ ...invoice, discountPercentage: Number(e.target.value) })}
                disabled={!invoice.applyDiscount}
                className="border p-2 w-16 text-right mr-4"
              />
              <FormField
                name="discountAmount"
                type="number"
                value={invoice.discountAmount || ""}
                onChange={(e) => setInvoice({ ...invoice, discountAmount: Number(e.target.value) })}
                disabled={!invoice.applyDiscount}
                className="border p-2 w-24 text-right"
              />
            </div>
          </div>

          {/* Routing Number Section */}
          <div className="flex flex-col sm:flex-row justify-end items-center mb-2">
            <label className="text-lg font-medium sm:mr-2 w-full sm:w-24 text-right">Rounding</label>
            <FormField
              name="routingNumber"
              type="text"
              value={invoice.routingNumber || ""}
              onChange={(e) => setInvoice({ ...invoice, routingNumber: e.target.value })}
              className="border p-2 w-full sm:w-32 text-right"
            />
          </div>

          {/* Amount Section */}
          <div className="flex flex-col sm:flex-row justify-end items-center">
            <label className="text-lg font-medium sm:mr-2 w-full sm:w-24 text-right">Amount</label>
            <FormField
              name="amount"
              type="number"
              value={invoice.amount || ""}
              onChange={(e) => setInvoice({ ...invoice, amount: Number(e.target.value) })}
              className="border p-2 w-full sm:w-32 text-right"
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-md mt-4">
        <h3 className="text-lg font-medium col-span-1 sm:col-span-2">Customer Details</h3>

        <div className="flex flex-col space-y-2">
          {[{ label: "Name", name: "customer", type: "text" },
          { label: "Address 1", name: "address1", type: "text" },
          { label: "Address 2", name: "address2", type: "text" },
          { label: "Address 3", name: "address3", type: "text" }].map(({ label, name, type }) => (
            <div key={name} className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <Label text={label} htmlFor={name} />
              <div className="w-full sm:w-1/2">
                <FormField name={name} type={type} value={invoice[name] || ""} onChange={handleInputChange} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-2">
          {[{ label: "Telephone", name: "telephone", type: "text" },
          { label: "Mobile", name: "mobile", type: "text" },
          { label: "Tax Reg No", name: "taxRegNo", type: "text" }].map(({ label, name, type }) => (
            <div key={name} className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <Label text={label} htmlFor={name} />
              <div className="w-full sm:w-1/2">
                <FormField name={name} type={type} value={invoice[name] || ""} onChange={handleInputChange} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutwardInvoice;
