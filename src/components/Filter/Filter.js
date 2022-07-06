// import { useState } from 'react';
import s from './Filter.module.css';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';

function Filter({ filter, onChange }) {
  const loginInputId = nanoid();

  return (
    <div className={s.filter__wrapper}>
      <label className={s.filter__field} htmlFor={loginInputId} />
      Find contact by name:
      <input
        id={loginInputId}
        className={s.filter__input}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
