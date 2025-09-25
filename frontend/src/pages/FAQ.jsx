import Header from '../components/Header'
import ContentHeader from '../components/ContentHeader'
import FAQContent from '../components/FAQContent'
import Footer from '../components/Footer'


function FAQ() {
  
  return (
    <div className='flex flex-col'>
    <Header background={'bg-white/35'} />
      <ContentHeader title={'FAQ'} />
      <FAQContent />
      <div className='mt-10'>
        <Footer />
      </div>

    </div>
  )
}

export default FAQ