describe ('Twitter Bot unit tests', () => {
    it('should call updateStatus', async() => {
        updateTwitter();
        expect(updateStatus()).calledOnce;
    })
})