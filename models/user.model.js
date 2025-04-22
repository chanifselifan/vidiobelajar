export const userModel = {
  tableName: 'users',
  columns: {
    id: { type: 'INT', primaryKey: true, autoIncrement: true },
    nama: { type: 'VARCHAR', allowNull: false },
    username: { type: 'VARCHAR', unique: true, allowNull: false },
    email: { type: 'VARCHAR', unique: true, allowNull: false },
    password: { type: 'TEXT', allowNull: false },
    gender: { type: 'VARCHAR', allowNull: true },
    no_hp: { type: 'VARCHAR', allowNull: true },
    created_at: { type: 'TIMESTAMP', default: 'CURRENT_TIMESTAMP' },
    updated_at: { type: 'TIMESTAMP', default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' },
  },
};
