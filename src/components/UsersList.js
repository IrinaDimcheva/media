import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../+store';

function UsersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return 'Users List';
}

export default UsersList;
