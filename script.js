//Business logic
function BankAccount(name, initial) {
	this.clientName = name;
	this.initialDeposit = initial;
	// this.currentBalance = balance;
}
BankAccount.prototype.deposit = function(amount) {
	if (this.initialDeposit > 0) {
		this.initialDeposit += amount;
		alert(`Deposit: ${this.name} new balance is Frw${this.initialDeposit}`);
		return true;
	} else return false;
};

BankAccount.prototype.withdraw = function(amount) {
	// alert(amount);
	if (this.initialDeposit > amount) {
		this.initialDeposit -= amount;
		alert(`Withdraw: ${this.clientName} new balance is Frw${this.initialDeposit}`);
		return this.initialDeposit;
	}
};
//User Interface logic
$(document).ready(function() {
	var userAccount;
	$('form#new_account').submit(function(event) {
		event.preventDefault();
		var name = $('#client_name').val();
		var initialDeposit = parseInt($('#deposit').val());
		// newBalance = initialDeposit;
		userAccount = new BankAccount(name, initialDeposit);
		console.log(userAccount);
	});
	// var inputtedName = $(this).find('input.client|_name').val();

	// $('.new_account').text();
	// $('.balance').text('Frw{clientAccount.balance}');

	$('#withdraw1').submit(function(event) {
		event.preventDefault();
		var withdraw = parseInt($('#current_withdraw').val());
		userAccount.withdraw(withdraw);

		$('.balance').text(userAccount.initialDeposit);
		$('#withdraw1').text('You withdraw');
	});
	$('#deposit2').submit(function(event) {
		event.preventDefault();
		var deposit = parseInt($('#current_deposit').val());
		userAccount.deposit(deposit);
	});
	$('input#client_name').val(' ');
	$('input#deposit').val(' ');
	$('input#current-deposit').val(' ');
	$('input#current-withdraw').val(' ');
});
