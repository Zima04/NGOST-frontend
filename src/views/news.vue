<template>
	<div class="container">
		<div class="column">
			<div class="post-module">
				<div class="thumbnail">
					<div class="date">
						<div class="day">27</div>
						<div class="month">Mar</div>
					</div>
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
				</div>
				<div class="post-content">
					<div class="category">Photos</div>
					<h1 class="title">City Lights in New York</h1>
					<h2 class="sub_title">The city that never sleeps.</h2>
					<p class="description">
						New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments,
						magnificent buildings and countless dazzling skyscrapers.
					</p>
				</div>
			</div>
		</div>
		<div class="column">
			<div class="post-module">
				<div class="thumbnail">
					<div class="date">
						<div class="day">27</div>
						<div class="month">Mar</div>
					</div>
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
				</div>
				<div class="post-content">
					<div class="category">Photos</div>
					<h1 class="title">City Lights in New York</h1>
					<h2 class="sub_title">The city that never sleeps.</h2>
					<p class="description">
						New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments,
						magnificent buildings and countless dazzling skyscrapers.
					</p>
				</div>
			</div>
		</div>
		<div class="column">
			<div class="post-module">
				<div class="thumbnail">
					<div class="date">
						<div class="day">27</div>
						<div class="month">Mar</div>
					</div>
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
				</div>
				<div class="post-content">
					<div class="category">Photos</div>
					<h1 class="title">City Lights in New York</h1>
					<h2 class="sub_title">The city that never sleeps.</h2>
					<p class="description">
						New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments,
						magnificent buildings and countless dazzling skyscrapers.
					</p>
				</div>
			</div>
		</div>
		<div class="column">
			<div class="post-module">
				<div class="thumbnail">
					<div class="date">
						<div class="day">27</div>
						<div class="month">Mar</div>
					</div>
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
				</div>
				<div class="post-content">
					<div class="category">Photos</div>
					<h1 class="title">City Lights in New York</h1>
					<h2 class="sub_title">The city that never sleeps.</h2>
					<p class="description">
						New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments,
						magnificent buildings and countless dazzling skyscrapers.
					</p>
				</div>
			</div>
		</div>
		<div class="column">
			<div class="post-module">
				<div class="thumbnail">
					<div class="date">
						<div class="day">27</div>
						<div class="month">Mar</div>
					</div>
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
				</div>
				<div class="post-content">
					<div class="category">Photos</div>
					<h1 class="title">City Lights in New York</h1>
					<h2 class="sub_title">The city that never sleeps.</h2>
					<p class="description">
						New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments,
						magnificent buildings and countless dazzling skyscrapers.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'News',
	data() {
		return {};
	},
	methods: {}
};
</script>
<style lang="scss" scoped>
$white: #ffffff;
$black: #000000;
$dark_gray: lighten($black, 20%);
$gray: lighten($black, 40%);
$light_gray: lighten($black, 60%);

@mixin background-cover() {
	background-size: cover;
}

@mixin border-radius($radius: 3px) {
	border-radius: $radius;
}

@mixin border-radius-specific($tl-radius: 3px, $tr-radius: 3px, $bl-radius: 3px, $br-radius: 3px) {
	border-radius: $tl-radius $tr-radius $bl-radius $br-radius;
}

@mixin box-shadow($h-shadow: 0px, $v-shadow: 1px, $blur: 2px, $spread: 0px, $color: fade-out($black, 0.85)) {
	box-shadow: $h-shadow $v-shadow $blur $spread $color;
}

@mixin inner-box-shadow($h-shadow: 0px, $v-shadow: 1px, $blur: 2px, $spread: 0px, $color: fade-out($black, 0.85)) {
	box-shadow: inset $h-shadow $v-shadow $blur $spread $color;
}

@mixin box-shadow-none() {
	box-shadow: none;
}

@mixin transitions($property: all, $duration: 0.3s, $timing: linear, $delay: 0s) {
	transition: $property $duration $timing $delay;
}

@mixin animation($animation_name, $duration: 1s, $timing_function: ease) {
	animation: $animation_name $duration $timing_function;
}

@mixin box-size() {
	box-sizing: border-box;
}

.post-module {
	position: relative;
	z-index: 1;
	display: block;
	background: $white;
	min-width: 270px;
	height: 470px;
	@include box-shadow;
	@include transitions;

	&:hover {
		@include box-shadow($blur: 35px, $color: fade-out($black, 0.7));
		.thumbnail {
			img {
				transform: scale(1.1);
				opacity: 0.6;
			}
		}
		.post-content {
			.description {
				max-height: 100px;
			}
		}
	}

	.thumbnail {
		background: $black;
		height: 400px;
		overflow: hidden;
		.date {
			position: absolute;
			line-height: 16px;
			top: 20px;
			right: 20px;
			z-index: 1;
			background: #e74c3c;
			width: 55px;
			height: 55px;
			padding: 12.5px 0;
			@include border-radius(100%);
			color: $white;
			font-weight: 700;
			text-align: center;
			@include box-size;

			.day {
				font-size: 18px;
			}
			.month {
				font-size: 12px;
				text-transform: uppercase;
			}
		}
		img {
			display: block;
			width: 120%;
			@include transitions;
		}
	}
	.post-content {
		position: absolute;
		bottom: 0;
		background: $white;
		width: 100%;
		padding: 30px;
		@include box-size;
		@include transitions($timing: cubic-bezier(0.37, 0.75, 0.61, 1.05));
		.category {
			position: absolute;
			top: -34px;
			left: 0;
			background: #e74c3c;
			padding: 10px 15px;
			color: $white;
			font-size: 14px;
			font-weight: 600;
			text-transform: uppercase;
		}
		.title {
			margin: 0;
			padding: 0 0 10px;
			color: $dark_gray;
			font-size: 26px;
			font-weight: 700;
		}
		.sub_title {
			margin: 0;
			padding: 0 0 20px;
			color: #e74c3c;
			font-size: 20px;
			font-weight: 400;
		}
		.description {
			display: block;
			max-height: 0;
			color: $gray;
			font-size: 14px;
			line-height: 1.8em;
			@include transitions($timing: cubic-bezier(0.37, 0.75, 0.61, 1.05));
			overflow: hidden;
		}
	}
}

.container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 2rem;
	margin: 0 auto;
	font-size: 14px;

	.column {
		width: 25%;
		padding: 1rem;
		@include box-size;
	}

	.info {
		width: 300px;
		margin: 50px auto;
		text-align: center;
		h1 {
			margin: 0 0 15px;
			padding: 0;
			font-size: 24px;
			font-weight: 400;
			color: $dark_gray;
		}
		span {
			color: $gray;
			font-size: 12px;
			a {
				color: $black;
				text-decoration: none;
			}
			.fa {
				color: #e74c3c;
			}
		}
	}
}
</style>
