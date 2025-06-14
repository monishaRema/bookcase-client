import { motion } from 'framer-motion';


const Footer = () => {


  return (
    <footer className="border-t bg-[#001e2b] border-[#00ed644d] pt-20 pb-5">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #00ed64 0%, #00684a 100%)' }}
              >
              
              </div>
              <span className="text-white font-bold text-xl">Virtual Bookshelf</span>
            </div>
            <p className="mb-6 max-w-md" style={{ color: '#ffffff' }}>
              Your digital reading companion. Create, organize, and share your book collection with fellow book lovers around the world.
            </p>
            
       
            <div className="space-y-2">
     
            </div>
          </motion.div>

 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              
            </ul>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
             
            </div>
          </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t mt-8 pt-8 text-center border-[#00ed644d] "
        
        >
          <p className='text-gray-300 '>
            © 2025 Book Case. All rights reserved.Designed By Mosnisha Rema.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

