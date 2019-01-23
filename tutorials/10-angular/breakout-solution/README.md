# Counter App

## Install TypeScript, if you didn't so far
```
npm install -g typescript
```

## Transpilation

To transpile the TypeScript file to plain Javascript, run
```
tsc mvc.ts -t ES5
```
(-t ES5 is required because Getters are not supported in ES3)