import { useRef, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import Icon from '../../components/Icon';
import { useToast } from '../../components/Toast';

const users = [
  { name: 'Pia Pacana', initials: 'PP', email: 'pacana.pia123@gamil.com', role: 'Admin', active: true },
  {
    name: 'Raizhi Jane Sarino',
    initials: 'RJS',
    email: 'sarino.raizhi25@gmail.com',
    role: 'Farmer',
    active: true,
  },
  {
    name: 'Deborah May Macaubos',
    initials: 'DM',
    email: 'macaubos.deborahmay25@gmail.com',
    role: 'Technician',
    active: true,
  },
  { name: 'Jereve Gulay', initials: 'JG', email: 'gulay.jereve20@gmail.com', role: 'Farmer', active: false },
  {
    name: 'Carl Derick Pimentel',
    initials: 'CDP',
    email: 'pimentel.carlderick@gmail.com',
    role: 'Technician',
    active: true,
  },
];

export default function Users() {
  const toast = useToast();
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: 'Juan Dela Cruz',
    email: 'juan@cacaoguard.com',
    role: 'Admin',
  });

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const edit = (user) => {
    setForm({ name: user.name, email: user.email, role: user.role });
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <AdminLayout active="users" title="Users">
      <div className="head">
        <div>
          <h1>Users</h1>
          <p className="sub">5 active users managed in your organization</p>
        </div>
        <div className="head-r">
          <button className="btn btn-g" onClick={() => toast('Add user form coming soon')}>
            <Icon name="plus" size={16} />
            Add System User
          </button>
        </div>
      </div>
      <section className="card mb">
        <div className="ch">
          <h2 className="h-sm">
            <Icon name="edit" size={18} /> Edit User Profile
          </h2>
        </div>
        <form
          ref={formRef}
          className="form cols c-2 tight"
          onSubmit={(e) => {
            e.preventDefault();
            toast('Changes saved');
          }}
        >
          <label>
            Full Name
            <input className="inp" value={form.name} onChange={update('name')} />
          </label>
          <label>
            Email Address
            <input className="inp" value={form.email} onChange={update('email')} />
          </label>
          <label>
            System Role
            <select className="inp" value={form.role} onChange={update('role')}>
              <option>Admin</option>
              <option>Farmer</option>
              <option>Technician</option>
            </select>
          </label>
          <div className="end">
            <button className="btn btn-g wide" type="submit">
              <Icon name="check" size={16} />
              Save Changes
            </button>
          </div>
        </form>
      </section>
      <section className="card">
        <div className="scroll">
          <table className="tbl tint">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Active</th>
                <th className="r">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.email}>
                  <td>
                    <div className="who">
                      <span className="ini">{u.initials}</span>
                      <b>{u.name}</b>
                    </div>
                  </td>
                  <td className="mut">{u.email}</td>
                  <td>
                    <span className={`pill ${u.role === 'Technician' ? 'tan' : 'lime-soft'}`}>{u.role}</span>
                  </td>
                  <td>
                    <input
                      className="sw"
                      type="checkbox"
                      defaultChecked={u.active}
                      aria-label={`Active: ${u.name}`}
                    />
                  </td>
                  <td className="r">
                    <button className="icbtn edit" onClick={() => edit(u)} aria-label={`Edit ${u.name}`}>
                      <Icon name="edit" size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AdminLayout>
  );
}
