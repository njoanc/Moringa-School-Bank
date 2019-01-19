//Business logic
function BankAccount(name, initial, balance) {
	this.clientName = name;
	this.initialDeposit = initial;
	this.currentBalance = balance;
}
Account.prototype.deposit = function(amount) {
	if (this._isPositive(amount)) {
		this.balance += amount;
		alert(`Deposit: Frw{this.name} new balance is Frw{this.balance}`);
		return true;
	} else return false;
};

Account.prototype.withdraw = function(amount) {
	if (this._isAllowed(amount)) {
		this.balance -= amount;
		alert(`Withdraw: Frw{this.clientName} new balance is Frw{this.currentBalance}`);
		return true;
	}
	return false;
};
//User Interface logic

$(document).ready(function() {
	$('form#submit').submit(function(event) {
		event.preventDefault();
		name = Frw('#client_name').val();
		initialDeposit = parseInt(Frw('#deposit').val());
		newBalance = initialDeposit;
		userAccount = new BankAccount(name, initial, balance);
	});

	$('.new_account').text();
	$('.balance').text('Frw{clientAccount.balance}');

	$('#deposit2').submit(function(event) {
		event.preventDefault();
		withdraw = parseInt(Frw('#current-withdraw').val());
		userAccount.makeWithdraw(Withdraw);

		$('.balance').text('Frw{clientAccount.balance}');
		$('#withdraw1').text('You withdraw');
	});
	$('input#client_name').val(' ');
	$('input#deposit').val(' ');
	$('input#current-deposit').val(' ');
	$('input#current-withdraw').val(' ');
});
