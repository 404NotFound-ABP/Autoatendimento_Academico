import bcrypt from 'bcrypt';

const password = process.argv[2];

if (!password) {
  console.error('Uso: npx ts-node src/utils/hashPassword.ts <senha>');
  process.exit(1);
}

bcrypt.hash(password, 10).then((hash) => {
  console.log(hash);
});
