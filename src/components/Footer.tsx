export default function Footer() {
    return (
        <div className="flex flex-row gap-2">
        <Button
          variant="contained"
          onClick={handleBack}
          className="bg-zinc-500"
          color="primary">
          Anterior
        </Button>
        <Button 
          variant="contained"
          className="bg-zinc-500"
          onClick={handleNext}>
          Próximo
        </Button>
      </div>
    )
}