/* eslint-disable react/prop-types */
import React from 'react';
import { useFieldArray } from 'react-hook-form';
import currencyFormat from '../../services/currencyFormat';

let renderCount = 0;

export default function Fields({ control, register }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items'
  });

  renderCount += 1;

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
            </label>

            <div className="counter">
              Total
              <br />
              {currencyFormat(renderCount)}
            </div>

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
