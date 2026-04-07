#!/bin/bash

cd /vercel/share/v0-project

# Revert to the specified commit
git reset --hard v0/veronicajackson123456-5483-80f10c53

# Show the result
echo "Reverted to commit: v0/veronicajackson123456-5483-80f10c53"
git log --oneline -5
