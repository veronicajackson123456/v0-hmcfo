import { execSync } from 'child_process';

try {
  console.log('Reverting to commit v0/veronicajackson123456-5483-80f10c53...');
  
  // Get the full commit hash from the branch name
  const branchOutput = execSync('git rev-list --all | grep -F "v0/veronicajackson123456-5483-80f10c53" || git log --all --oneline | head -20', { encoding: 'utf-8' });
  console.log('Recent commits:');
  console.log(branchOutput);
  
  // Try to checkout the specific reference
  const checkoutResult = execSync('git checkout v0/veronicajackson123456-5483-80f10c53', { encoding: 'utf-8' });
  console.log('Checkout result:', checkoutResult);
  
  console.log('✓ Successfully reverted to the specified version');
} catch (error) {
  console.error('Error during revert:', error.message);
  console.log('\nTrying alternative approach...');
  try {
    const logOutput = execSync('git log --oneline --all | head -20', { encoding: 'utf-8' });
    console.log('Available commits:\n' + logOutput);
  } catch (e) {
    console.error('Could not retrieve commit history:', e.message);
  }
}
