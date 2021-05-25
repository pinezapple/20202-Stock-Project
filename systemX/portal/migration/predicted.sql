CREATE TABLE `predicted_lstm_2_layers` (`ticker` varchar(20) not null,
	`price` decimal(12,6),
	`timestamp` datetime,
	`mse` text not null,
	`mae` text not null,
	`accuracy` text not null);

CREATE TABLE `predicted_lstm_3_layers` (`ticker` varchar(20) not null,
	`price` decimal(12,6),
	`timestamp` datetime,
	`mse` text not null,
	`mae` text not null,
	`accuracy` text not null);
