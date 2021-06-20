import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import dayjs from 'dayjs';
import { withRouter } from 'react-router-dom';
import GoBack from '../../Buttons/GoBack';
import Header from '../../Header';
import EditFieldArray from '../EditFieldArray';
import RegularBtn from '../../Buttons/RegularBtn';
import { updateInvoice } from '../../../redux/actions/actionCreators';
import 'react-datepicker/dist/react-datepicker.css';

function EditForm({ history, dataInvoice }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const dispatch = useDispatch();
  const defaultValues = {
    item: [
      {
        name: dataInvoice?.items?.name,
        quantity: dataInvoice?.items?.quantity,
        price: dataInvoice?.items?.price
      }
    ]
  };

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
    const newData = {
      ...dataInvoice, ...data
    };

    dispatch(updateInvoice(newData));

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
        <h2>
          {`Edit #${
            dataInvoice._id
              .toUpperCase()
              .slice(-5)
          }`}

        </h2>
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
              <input
                // defaultValue={dataInvoice?.from?.address?.street}
                {...register('from.address.street')}
              />
            </label>
          </div>

          <div className="fieldset-from__city">
            <label className="from-city__label" htmlFor="city">
              City
              <br />
              <input
                // defaultValue={dataInvoice?.from?.address?.city}
                {...register('from.address.city')}
              />
            </label>
          </div>

          <div className="fieldset-from__code">
            <label className="from-code__label" htmlFor="postCode">
              Post Code
              <br />
              <input
                // defaultValue={dataInvoice?.from?.address?.postCode}
                {...register('from.address.postCode')}
              />
            </label>
          </div>

          <div className="fieldset-from__country">
            <label className="from-country__label" htmlFor="country">
              Country
              <br />
              <input
                // defaultValue={dataInvoice?.from?.address?.country}
                {...register('from.address.country')}
              />
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
              <input
                // defaultValue={dataInvoice?.to?.name}
                {...register('to.name')}
              />
            </label>
          </div>

          <div className="fieldset-to__email">
            <label htmlFor="email">
              Client&apos;s Email
              <br />
              <input
                // defaultValue={dataInvoice?.to?.email}
                {...register('to.email')}
              />
            </label>
          </div>

          <div className="fieldset-to__street">
            <label htmlFor="street">
              Street Address
              <br />
              <input
                // defaultValue={dataInvoice?.to?.address.street}
                {...register('to.address.street')}
              />
            </label>
          </div>

          <div className="fieldset-to__city">
            <label htmlFor="city">
              City
              <input
                // defaultValue={dataInvoice?.to?.address.city}
                {...register('to.address.city')}
              />
            </label>
          </div>

          <div className="fieldset-to__code">
            <label htmlFor="postCode">
              Post Code
              <input
                // defaultValue={dataInvoice?.to?.address.postCode}
                {...register('to.address.postCode')}
              />
            </label>
          </div>

          <div className="fieldset-to__country">
            <label htmlFor="country">
              Country
              <input
                // defaultValue={dataInvoice?.to?.address.country}
                {...register('to.address.country')}
              />
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
              render={({ field }) => (
                <DatePicker
                  // value={dayjs(dataInvoice?.invoiceDate).format('DD MMM YYYY')}
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
              render={({ field }) => (
                <DatePicker
                  // value={dayjs(dataInvoice?.paymentTerms).format('DD MMM YYYY')}
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
              <input
                // defaultValue={dataInvoice?.projectDescription}
                {...register('projectDescription')}
              />
            </label>
          </div>

        </fieldset>

        <fieldset className="form__fieldset-items">

          <div className="fieldset-items__legend">
            <legend>Item List</legend>
          </div>

          <EditFieldArray
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
              type="button"
              nameBtn="Cancel"
              onClick={redirect}
            />

            <RegularBtn
              modify="primary"
              nameBtn="Save Changes"
              type="submit"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default withRouter(EditForm);
