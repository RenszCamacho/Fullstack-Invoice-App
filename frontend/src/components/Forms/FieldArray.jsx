import React, { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

// import currencyFormat from '../../services/currencyFormat';

export default function Fields({ control }) {
  const { register, getValues } = useForm();
  const [price, setPrice] = useState({});
  const lastInput = {};

  function multiply(index) {
    const lastPrice = getValues(`items.${index}.price`);
    const lastQuantity = getValues(`items.${index}.quantity`);
    lastInput[index] = lastQuantity * (+lastPrice);
    setPrice(price ? { ...price, ...lastInput } : lastInput);
  }
  const {
    fields, append, remove
  } = useFieldArray({
    control,
    name: 'items'
  });

  return (
    <>
      <ul className="fieldset-items__list-items">
        {fields.map((item, index) => (
          <li className="list-items__item" key={item.id}>

            <label className="item__label" htmlFor="itemList">
              Item Name
              <input
                {...register(`items.${index}.name`)}
                placeholder="Product Name"
              />
            </label>

            <label className="item__label" htmlFor="itemList">
              Qty.
              <input
                {...register(`items.${index}.quantity`)}
                placeholder="Qty"
              />

            </label>

            <label className="item__label" htmlFor="itemList">
              Price
              <input
                {...register(`items.${index}.price`)}
                placeholder="Price"
              />
              <button type="button" onClick={() => multiply(index)}>Right price</button>
            </label>

            <label htmlFor="itemList" className="item__total-list">
              Total
              <input
                {...register(`items.${index}.total`)}
                value={price[index]}
              />
            </label>

            <button className="item__btn" type="button" onClick={() => remove(index)}>
              <em className="fas fa-trash" />
            </button>
          </li>

        ))}
      </ul>

      <button
        className="fieldset-items__btn"
        type="button"
        onClick={() => {
          append({ name: 'items' });
        }}
      >
        + Add New Item
      </button>

    </>
  );
}

Fields.propTypes = {
  control: PropTypes.element.isRequired
};
