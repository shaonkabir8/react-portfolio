import React from "react"
import styled, { ThemeProvider } from "styled-components"
import Layout from "../components/Layout"

const theme = {
	transition: "all 0.2s linear",
	color: {
		bg: "#111a28",
		border: "#00cf5d",
		green: "#0bda51",
		light: "#1d293a",
		gradient: "linear-gradient(315deg, #63d471 0%, #233329 74%)",
		gradient_bg: "#63d471",
	},
}

const BlogStyle = styled.div`
	.header {
		background: black;
	}
	.mainmenu {
		display: none;
	}
	.blogmenu {
		display: block !important;
	}
`

const Blog = () => {
	return (
		<ThemeProvider theme={theme}>
			<BlogStyle>
				<Layout>
					<div className="blog-hero-area">
						<div className="container">
							<div className="row">
								<div className="col-md-10 offset-md-1">
									<h1>শাওনের ডায়রি</h1>
									<p>
										আমি শাওন কবির। ভালোবাসি গান শুনতে, গল্প লিখতে, ঘুরতে।
										অনেকদিন থেকেই একটা ইচ্ছা ছিল নিজের অদ্ভত ভাবনাগুলো কোথাও না
										কোথাও লিখবো । সবাই পড়বে, দেখবে। অবশেষে নিজের একটা ওয়েবসাইট
										খুলে তাতে ব্লগ লেখা শুরু করলাম । এতদিন যে লেখাগুলো গুগল কীপ
										বা ডায়রি তে লিখতাম সেই লেখাগুলোই ব্লগে লিখবো। এই ব্লগের সবটা
										জুড়েই এক স্বপ্ন বাজ ভবঘুরে ছেলের একরাশ খামখেয়ালী ।
									</p>
									<p>
										আমার সম্পর্কে এর চেয়ে বেশি লেখার সৌভাগ্য আমার এখনো হইনি।
										হাসি হাসি মুখে দিব্বি বেঁচে আছি এটাই বিধিতার সবচেয়ে বড় কৃপা।
									</p>
									<p>
										যদি লোকসম্মুখে প্রশ্ন জিগ্গেস করতে বা উপদেশ, বকাঝকা,
										গালাগালি, হুমকি দিতে সংকোচ লাগে তাইলে ইমেইল করে দেন
										shaonkabir98@gmail.com
									</p>
								</div>
							</div>
						</div>
					</div>
				</Layout>
			</BlogStyle>
		</ThemeProvider>
	)
}

export default Blog
