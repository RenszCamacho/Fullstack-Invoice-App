import React from 'react';
import { useFieldArray } from 'react-hook-form';

export default function Fields({
  register, control, getValues, setValue
}) {
  const lastInput = {};

  function multiply(index) {
    const lastPrice = getValues(`items.${index}.price`);
    const lastQuantity = getValues(`items.${index}.quantity`);
    lastInput[index] = lastQuantity * (+lastPrice);
    return lastInput[index];
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

            <label
              className="item__label"
              htmlFor="itemList"
            >
              Item Name
              <input
                data-testid="item"
                defaultValue={item.name}
                {...register(`items[${index}].name`)}
                placeholder="Product Name"
              />
            </label>

            <label className="item__label" htmlFor="itemList">
              Qty.
              <input
                data-testid="quantity"
                {...register(`items[${index}].quantity`)}
                placeholder="Qty"
              />

            </label>

            <label className="item__label" htmlFor="itemList">
              Price
              <input
                data-testid="price"
                {...register(`items[${index}].price`)}
                placeholder="Price"
              />
            </label>

            <label className="item__label item__label--total" htmlFor="itemList">
              Total
              <input
                data-testid="total"
                {...register(`items[${index}].total`)}
              />
            </label>

            <button data-testid="delete-product" className="item__btn" type="button" onClick={() => remove(index)}>
              <em className="fas fa-trash" />
            </button>

            <button
              data-testid="delete-product"
              className="fieldset-items__btn"
              type="button"
              onClick={
              () => setValue(`items[${index}].total`, multiply(index))
              }
            >
              Get Total
            </button>
          </li>

        ))}
      </ul>

      <button
        className="fieldset-items__btn"
        type="button"
        onClick={() => {
          append({ name: '' });
        }}
      >
        + Add New Item
      </button>

    </>
  );
}
