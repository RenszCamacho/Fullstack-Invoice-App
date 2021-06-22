import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import dayjs from 'dayjs';
import { withRouter } from 'react-router-dom';
import GoBack from '../../Buttons/GoBack';
import Header from '../../Header';
import FieldArray from '../FieldArray';
import RegularBtn from '../../Buttons/RegularBtn';
import { addInvoice } from '../../../redux/actions/actionCreators';
import 'react-datepicker/dist/react-datepicker.css';
import './newForm.scss';

const defaultValues = {
  items: [
    {
      name: 'Product Name',
      quantity: '0',
      price: '0'
    }
  ]
};

function NewForm({ history }) {
  const dispatch = useDispatch();
  const currentProfile = useSelector((store) => store.accesstoken);

  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    setValue
  } = useForm({
    defaultValues
  });

  const onSubmit = (data, event) => {
    const newInvoice = {
      ...data,
      name: currentProfile.user.name
    };
    dispatch(addInvoice(newInvoice));

    history.push('/');

    event.target.reset();
  };

  function redirect() {
    history.push('/');
  }

  return (
    <div className="form-container">
      <Header />
      <GoBack />

      <div className="form-container__wrap-title">
        <h2>New Invoice</h2>
      </div>

      <form className="form-container__form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="form__fieldset-from">

          <div className="fieldset-from__legend">
            <legend>Bill from</legend>
          </div>

          <div className="fieldset-from__street">
            <label className="from-street__label" htmlFor="street">
              Street Address
              <br />
              <input {...register('from.address.street', { required: true })} />
            </label>
          </div>

          <div className="fieldset-from__city">
            <label className="from-city__label" htmlFor="city">
              City
              <br />
              <input {...register('from.address.city', { required: true })} />
            </label>
          </div>

          <div className="fieldset-from__code">
            <label className="from-code__label" htmlFor="postCode">
              Post Code
              <br />
              <input {...register('from.address.postCode', { required: true })} />
            </label>
          </div>

          <div className="fieldset-from__country">
            <label className="from-country__label" htmlFor="country">
              Country
              <br />
              <input {...register('from.address.country', { required: true })} />
            </label>
          </div>

        </fieldset>

        <fieldset className="form__fieldset-to">

          <div className="fieldset-to__legend">
            <legend>Bill to</legend>
          </div>

          <div className="fieldset-to__name">
            <label htmlFor="name">
              Client&apos;s Name
              <br />
              <input {...register('to.name', {
                required: true, pattern: /[A-Za-z][A-Za-z0-9-_]{4,24}/i
              })}
              />
            </label>
          </div>

          <div className="fieldset-to__email">
            <label htmlFor="email">
              Client&apos;s Email
              <br />
              <input {...register('to.email', {
                required: true, pattern: /(\w\.?)+@[\w.-]+\.\w{2,4}/i
              })}
              />
            </label>
          </div>

          <div className="fieldset-to__street">
            <label htmlFor="street">
              Street Address
              <br />
              <input {...register('to.address.street', { required: true })} />
            </label>
          </div>

          <div className="fieldset-to__city">
            <label htmlFor="city">
              City
              <input {...register('to.address.city', { required: true })} />
            </label>
          </div>

          <div className="fieldset-to__code">
            <label htmlFor="postCode">
              Post Code
              <input {...register('to.address.postCode', { required: true })} />
            </label>
          </div>

          <div className="fieldset-to__country">
            <label htmlFor="country">
              Country
              <input {...register('to.address.country', { required: true })} />
            </label>
          </div>

        </fieldset>

        <fieldset className="form__fieldset-date">

          <div className="fieldset-date__date-picker">
            Issue Date
            <br />
            <Controller
              name="invoiceDate"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <DatePicker
                  className="input-container__input"
                  onChange={(event) => field.onChange(event)}
                  selected={field.value}
                  dateFormat="d MMM yyyy"
                  minDate={new Date()}
                  placeholderText={dayjs(new Date()).format('DD MMM YYYY')}
                />
              )}
            />
          </div>

          <div className="fieldset-date__date-picker">
            Payment Terms
            <br />
            <Controller
              name="paymentTerms"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <DatePicker
                  className="input-container__input"
                  onChange={(event) => field.onChange(event)}
                  selected={field.value}
                  dateFormat="d MMM yyyy"
                  minDate={new Date()}
                  placeholderText={dayjs(new Date()).format('DD MMM YYYY')}
                />
              )}
            />
          </div>

          <div className="fieldset-date__project-description">
            <label htmlFor="projectDescription">
              Project Description
              <input {...register('projectDescription', { required: true })} />
            </label>
          </div>

        </fieldset>

        <fieldset className="form__fieldset-items">

          <div className="fieldset-items__legend">
            <legend>Item List</legend>
          </div>

          <FieldArray
            {...{
              control, register, defaultValues, getValues, setValue, errors
            }}
          />

          <label style={{ display: 'none' }} htmlFor="isPaid">
            Paid
            <input name="isPaid" type="checkbox" {...register('status')} />
          </label>

        </fieldset>

        <fieldset className="form__fieldset-btn">
          <div className="fieldset-btn">
            <RegularBtn
              modify="info"
              nameBtn="Cancel"
              onClick={redirect}
            />

            <RegularBtn
              modify="primary"
              nameBtn="Save & Send"
              type="submit"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default withRouter(NewForm);
