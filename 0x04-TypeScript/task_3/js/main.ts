/// <reference path="./crude.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crude';

let row: RowElement = {
	firstName: 'Guillaume',
	lastName: 'Salva'
};

const newRowID: RowID = insertRow();

const updatedRow: RowElement = {...row, age: 23};

updateRow(newRowID, updatedRow);
deleteRow(newRowID);
