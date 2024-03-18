import { Link, Head } from '@inertiajs/react';

export default function PortfolioLandingPage({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Portofolio - Bayu Damar Breh Pambudi" />
            <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 selection:bg-red-500 selection:text-white">
                {/* Header Section */}
                <header className="bg-gray-900 text-white">
                    <div className="container mx-auto py-6 px-4">
                        <div className="flex justify-between items-center">
                            <div className="text-xl font-bold">My Portfolio</div>
                            <nav className="space-x-4">
                                <Link href="/" className="hover:text-gray-300">Home</Link>
                                <Link href="/projects" className="hover:text-gray-300">Projects</Link>
                                <Link href="/contact" className="hover:text-gray-300">Contact</Link>
                                {auth.user ? (
                                    <Link href={route('dashboard')} className="hover:text-gray-300">Dashboard</Link>
                                ) : (
                                    <>
                                        <Link href={route('login')} className="hover:text-gray-300">Log in</Link>
                                        <Link href={route('register')} className="hover:text-gray-300">Register</Link>
                                    </>
                                )}
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="bg-gray-900 text-white py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
                            <p className="text-lg mb-8">I build beautiful and functional web applications.</p>
                            <div className="flex justify-center">
                                <Link href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">View Projects</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Profile Section */}
                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0">
                           <img src="/img/bayu.png" alt="Bayu Damar Breh Pambudi" className="w-40 h-auto rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer mr-40 lg:mr-40" />
                        </div>
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h2 className="text-4xl font-bold mb-4 text-gray-800">Bayu Damar Breh Pambudi</h2>
                            <p className="text-lg mb-8 text-gray-600">Sistem Informasi, Universitas Negeri Semarang</p>
                            <p className="text-lg mb-8 text-gray-600">Interest: Web Developer, Back End Developer, Cloud Engineer</p>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="bg-gray-200 py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Featured Project 1 */}
                                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
                                    <h3 className="text-xl font-bold mb-2">Project 1</h3>
                                    <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget justo vitae est consequat hendrerit.</p>
                                    <Link href="#" className="text-blue-600 hover:underline">View Details</Link>
                                </div>
                                {/* Featured Project 2 */}
                                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
                                    <h3 className="text-xl font-bold mb-2">Project 2</h3>
                                    <p className="text-gray-700 mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                                    <Link href="#" className="text-blue-600 hover:underline">View Details</Link>
                                </div>
                                {/* Featured Project 3 */}
                                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
                                    <h3 className="text-xl font-bold mb-2">Project 3</h3>
                                    <p className="text-gray-700 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <Link href="#" className="text-blue-600 hover:underline">View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                {/* Skills Section */}
                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-4">Skills</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {/* Skill 1 */}
                                <div className="relative">
                                    <img src="/img/nodejs.png" alt="Node.js" className="w-16 h-16 mx-auto mb-2 hover:scale-150 transition duration-300 cursor-pointer" />
                                    <p className="text-lg">Node.js</p>
                                </div>
                                {/* Skill 2 */}
                                <div className="relative">
                                    <img src="/img/react.png" alt="React" className="w-16 h-16 mx-auto mb-2 hover:scale-150 transition duration-300 cursor-pointer" />
                                    <p className="text-lg">React</p>
                                </div>
                                {/* Skill 3 */}
                                <div className="relative">
                                    <img src="/img/laravel.png" alt="Laravel" className="w-16 h-16 mx-auto mb-2 hover:scale-150 transition duration-300 cursor-pointer" />
                                    <p className="text-lg">Laravel</p>
                                </div>
                                {/* Skill 4 */}
                                <div className="relative">
                                    <img src="/img/gcp.png" alt="GCP" className="w-16 h-16 mx-auto mb-2 hover:scale-150 transition duration-300 cursor-pointer" />
                                    <p className="text-lg">Google Cloud Platform</p>
                                </div>
                                {/* Skill 5 */}
                                <div className="relative">
                                    <img src="/img/tailwind.png" alt="Tailwind" className="w-16 h-16 mx-auto mb-2 hover:scale-150 transition duration-300 cursor-pointer" />
                                    <p className="text-lg">Tailwind CSS</p>
                                </div>
                                {/* Skill 6 */}
                                <div className="relative">
                                    <img src="/img/csharp.png" alt="C#" className="w-16 h-16 mx-auto mb-2 hover:scale-150 transition duration-300 cursor-pointer" />
                                    <p className="text-lg">C#</p>
                                </div>
                                {/* Skill 7 */}
                                <div className="relative">
                                    <img src="/img/javascript.png" alt="Javascript" className="w-16 h-16 mx-auto mb-2 hover:scale-150 transition duration-300 cursor-pointer" />
                                    <p className="text-lg">Javascript</p>
                                </div>
                                {/* Skill 8 */}
                                <div className="relative">
                                    <img src="/img/php.png" alt="PHP" className="w-16 h-16 mx-auto mb-2 hover:scale-150 transition duration-300 cursor-pointer" />
                                    <p className="text-lg">PHP</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Contact Section */}
                <section className="py-16 bg-gray-200">
                    <div className="container mx-auto px-4">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                            <p className="text-lg mb-8">Let's work together on your next project.</p>
                            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">Contact Me</Link>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-8">
                    <div className="container mx-auto px-4 text-center">
                        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
